import { MdError } from "react-icons/md";

const WrongCredentials = () => {
  return (
    <div className="w-full rounded p-3 border flex items-center gap-2 border-[#f00] border-l-4">
      <div className="w-10">
        <MdError className="text-[#f00] text-3xl" />
      </div>
      <div className="">
        <h4 className="text-gray-1 dark:text-gray-15 font-semibold text-sm">
          Вы ввели неверные данные
        </h4>
        <h5 className="text-xs text-gray-6 dark:text-gray-9">
          Проверьте корректность введеных вами данных, если забыли пароль можете
          восстановить{" "}
          <button className="lg:hover:underline text-blue-7 dark:text-blue-10">
            здесь.
          </button>
        </h5>
      </div>
    </div>
  );
};

export default WrongCredentials;
