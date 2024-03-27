type Props = {
    type: string;
    name: string;
    placeholder: string;
  };
  
  export const Input = ({ type, name, placeholder }: Props) => {
    return <input type={type} name={name} placeholder={placeholder}/>;
  };