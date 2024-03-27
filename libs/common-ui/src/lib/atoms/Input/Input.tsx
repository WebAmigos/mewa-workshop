type Props = {
    type: string;
    name: string;
    className:string;
    placeholder?: string;
  };
  
  export const Input = ({ type, name, className, placeholder }: Props) => {
    return <input className={className} type={type} name={name} placeholder={placeholder}/>;
  };