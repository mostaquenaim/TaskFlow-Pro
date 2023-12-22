import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";

const DashboardContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useAxios();
  const { user } = useAuth();

  const { data: allTask = [], refetch } = useQuery({
    queryKey: ["alltask", user],
    queryFn: () =>
      axios.get(`/alltask?email=${user?.email}`).then((res) => res.data),
  });

  const onSubmit = (data) => {
    const task = {
      title: data.title,
      dedline: data.dedline,
      priority: data.priority,
      descriptions: data.descriptions,
      status: "to-do",
      email: user?.email,
    };
    console.log(task);
    axios.post("/alltask", task).then((res) => {
      console.log(res.da);
      refetch();
      toast("Add Task Sucessfully", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    });
  };

  const to_do = allTask.filter((task) => task.status === 'to-do')
  const ongoing = allTask.filter((task) => task.status === 'ongoing')
  const completed = allTask.filter((task) => task.status === 'completed')


  const dragStarted = (e, id) => {
    console.log("drag has been started");
    e.dataTransfer.setData("todoId", id);
  };

  const dragingOver = (e) => {
    e.preventDefault()
    console.log('draging over now');
  }

  const dragDroppedTodo = (e, status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId, status);
    axios.put(`/alltask/${tanasperTaskId}`, { status: status })
      .then(res => {
        console.log(res.data);
        refetch()
      })
  }

  const dragDroppedOngoing = (e, status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId, status);
    axios.put(`/alltask/${tanasperTaskId}`, { status: status })
      .then(res => {
        console.log(res.data);
        refetch()
      })
  }

  const dragDroppedCompleted = (e, status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId, status);
    axios.put(`/alltask/${tanasperTaskId}`, { status: status })
      .then(res => {
        console.log(res.data);
        refetch()
      })
  }

  const handleDelete = id => {
    axios.delete(`/alltask/${id}`)
      .then(() => {
        refetch();
        toast("Task Deleted Successfully", {
          icon: "👏",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      })
  }



  return (
    <>
      <h1 className="text-center text-2xl p-5 font-bold">Add Task</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3">
          <div className="w-full">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <br />
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
              className="border-2 border-black px-2 py-1 w-full"
            />
            {errors.title && <span>This field is required</span>}
          </div>

          <div className="w-full">
            <label htmlFor="dedline" className="font-medium">
              Deadline
            </label>
            <br />
            <input
              {...register("dedline", { required: true })}
              type="date"
              className="border-2 border-black px-2 py-1 w-full"
            />
            {errors.dedline && <span>This field is required</span>}
          </div>

          <div className="w-full">
            <label htmlFor="priority" className="font-medium">
              Priority
            </label>
            <br />
            <select
              {...register("priority", { required: true })}
              name=""
              id=""
              className="border-2 border-black px-2 py-1 w-full"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="descriptions" className="font-medium">
            Descriptions
          </label>
          <br />
          <textarea
            {...register("descriptions", { required: true })}
            className="border-2 border-black px-2 py-1 w-full"
            name="descriptions"
            id=""
            rows="2"
          ></textarea>
          {errors.descriptions && <span>This field is required</span>}
        </div>

        <input
          type="submit"
          value="Add Task"
          className="bg-gray-800 px-7 py-2.5 text-white font-normal cursor-pointer"
        />
      </form>

      <h1 className="text-center text-2xl p-5 font-bold">Tasks</h1>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div
          onDragOver={(e) => dragingOver(e)}
          onDrop={(e) => dragDroppedTodo(e, 'to-do')}
          className="bg-purple-100 p-4 rounded-md"
        >
          <h1 className="text-xs md:text-xl lg:text-2xl font-semibold mb-4 text-purple-800 bg-base-100 p-3 rounded-lg">To-Do</h1>
          {to_do?.map((task) => (
            <div
              key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-yellow-200 mb-4 rounded-md p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xs md:text-lg lg:text-xl font-medium text-yellow-800">{task?.title}</h1>
                <button
                  onClick={() => handleDelete(task?._id)}
                  className="text-xl text-red-700"
                >
                  <FaTrashCan />
                </button>
              </div>
              <p className="text-xs md:text-sm leading-5 text-gray-700">{task?.descriptions}</p>
            </div>
          ))}
        </div>
        <div
          onDragOver={(e) => dragingOver(e)}
          onDrop={(e) => dragDroppedOngoing(e, 'ongoing')}
          className="bg-blue-100 p-4 rounded-md"
        >
          <h1 className="text-xs md:text-xl lg:text-2xl font-semibold mb-4 text-blue-800 bg-base-100 p-3 rounded-lg">On going</h1>
          {ongoing?.map((task) => (
            <div
              key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-yellow-200 mb-4 rounded-md p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xs md:text-lg lg:text-xl font-medium text-yellow-800">{task?.title}</h1>
                <button
                  onClick={() => handleDelete(task?._id)}
                  className="text-xl text-red-700"
                >
                  <FaTrashCan />
                </button>
              </div>
              <p className="text-xs md:text-sm leading-5 text-gray-700">{task?.descriptions}</p>
            </div>
          ))}
        </div>
        <div
          onDragOver={(e) => dragingOver(e)}
          onDrop={(e) => dragDroppedCompleted(e, 'completed')}
          className="bg-green-100 p-4 rounded-md"
        >
          <h1 className="text-xs md:text-xl lg:text-2xl font-semibold mb-4 text-green-800 bg-base-100 p-3 rounded-lg">Done</h1>
          {completed?.map((task) => (
            <div
              key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-yellow-200 mb-4 rounded-md p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xs md:text-lg lg:text-xl font-medium text-yellow-800">{task?.title}</h1>
                <button
                  onClick={() => handleDelete(task?._id)}
                  className="text-xl text-red-700"
                >
                  <FaTrashCan />
                </button>
              </div>
              <p className="text-xs md:text-sm leading-5 text-gray-700">{task?.descriptions}</p>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default DashboardContent;
