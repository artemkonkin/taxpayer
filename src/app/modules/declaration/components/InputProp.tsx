'use client';

import { ChangeEvent } from "react";
import { LabelTypeEnum } from "../../../shared/enums/LabelTypeEnum";

interface InputProps {
  num: string;
  name: string;
  type: string;
  value: string | number;
  desc?: string;
  size?: string;
  labelType?: LabelTypeEnum;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputProp: React.FC<InputProps> = ({ num: label, name, type, value, desc, size, labelType, onChange }) => {
  return (
    <div className={`flex ${labelType === LabelTypeEnum.Right ? 'flex-row items-center space-x-2' : 'flex-col space-y-2'} ${size} text-slate-600 uppercase text-sm`}>

      {labelType === LabelTypeEnum.left || labelType === LabelTypeEnum.Top && (
        <label htmlFor={name}>
          {desc}
        </label>
      )}

      <div className={`flex flex-row items-center`}>
        <span className="flex p-2 bg-teal-700 text-white rounded-l-md">
          {label}
        </span>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={`flex w-full p-2 pl-3 rounded-r-md`}
        />
      </div>

      {labelType === LabelTypeEnum.Right && (
        <label htmlFor={name}>
          {desc}
        </label>
      )}

    </div>
  );
};

export default InputProp;