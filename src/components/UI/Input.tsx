interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  error?: boolean;
  name: string;
}

const Input = ({ name, register, error, ...rest }: IInput) => {
  return (
    <input
      {...rest}
      {...register(name)}
      autoComplete="off"
      className={`w-full p-2 border rounded ${
        error
          ? "border-rose-5 dark:border-rose-8"
          : " border-opac-b-1 dark:border-opac-w-1"
      } bg-opac-b-1 dark:bg-opac-w-1 text-sm text-gray-4 dark:text-gray-12 focus:outline-none`}
    />
  );
};

export default Input;
