'use client';

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { STI100_4Declaration } from '../types/STI100_4Declaration';
import { LabelTypeEnum } from '../../../../shared/enums/LabelTypeEnum';
import InputProp from '../../components/InputProp';

interface FormProps {
  initialFormData: STI100_4Declaration;
  onSubmit: (formData: STI100_4Declaration) => void;
}

const STI100_4DeclarationPart2: React.FC<FormProps> = ({ initialFormData, onSubmit }) => {

  const tpInfo = [
    { num: '001', name: 'REGISTRATIONADDRESSSTREET', type: 'text', desc: "ИНН" },
    { num: '001', name: 'REGISTRATIONADDRESSSTREET', type: 'text', desc: "Наименование плательщика" },
    { num: '001', name: 'REGISTRATIONADDRESSSTREET', type: 'text', desc: "Код УГНС" },
    { num: '001', name: 'REGISTRATIONADDRESSSTREET', type: 'text', desc: "Наименование района" },
    { num: '001', name: 'REGISTRATIONADDRESSSTREET', type: 'text', desc: "Серия и № Паспорта" },
    { num: '001', name: 'PASSPORTCOUNTRY', type: 'text', desc: "Страна выдачи" },
    { num: '001', name: 'REGISTRATIONADDRESSSTREET', type: 'text', desc: "Телефон(Дом.Раб.)" },
    { num: '001', name: 'EMAIL', type: 'text', desc: "Адрес электронной почты" },
    { num: '001', name: 'ACTIONZIP', type: 'text', desc: "Почтовый индекс" },
    { num: '001', name: 'ACTIONADDRESSOBL', type: 'text', desc: "Область, Город/Область. район, Село" },
    { num: '001', name: 'ACTIONADDRESSSTREET', type: 'text', desc: "Улица/микрорайон, и Номер Дома/Квартиры " },
  ];

  const formFields = [
    { num: '050', name: 'STI100X050', type: 'number', desc: 'Облагаемые доходы (переносится показатель ячейки 169 приложения 1 (form sti -100-001)' },
    { num: '051', name: 'STI100X051', type: 'number', desc: 'Персональный вычет (в размере 6.5 расчетных показателей за каждый месяц налогового периода)' },
    { num: '052', name: 'STI100X052', type: 'number', desc: 'Вычеты на иждивенцев налогоплательщика (в размере одного расчетного показателя на каждого иждивенца за каждый месяц налогового периода)' },
    { num: '053', name: 'STI100X053', type: 'number', desc: 'Отчисления по государственному социальному страхованию' },
    { num: '054', name: 'STI100X054', type: 'number', desc: 'Вычет по расходам на негосударственное пенсионное страхование, социальный и имущественный вычеты (переносится показатель ячейки 221 приложения 2 (form sti -100-002)' },
    { num: '055', name: 'STI100X055', type: 'number', desc: 'Вычеты – всего (=051+052+053+054)' },
    { num: '056', name: 'STI100X056', type: 'number', desc: 'Налогооблагаемый доход (=050-055) (если значение данной ячейки отрицательное, то в ячейках 057 и 058, указывается цифра «0»)' },
    { num: '057', name: 'STI100X057', type: 'number', desc: 'Ставка подоходного налога' },
    { num: '058', name: 'STI100X058', type: 'number', desc: 'Сумма подоходного налога (= 056 х 057 / 100)' },
    { num: '059', name: 'STI100X059', type: 'number', desc: 'Сумма подоходного налога, удержанная налоговыми агентами' },
    { num: '060', name: 'STI100X060', type: 'number', desc: 'Сумма подоходного налога, уплаченная в иностранном государстве и подлежащая зачету' },
    { num: '061', name: 'STI100X061', type: 'number', desc: 'Разница (=058-059-060)' },
    { num: '062', name: 'STI100X062', type: 'number', desc: 'Подоходный налог к возврату' },
    { num: '063', name: 'STI100X063', type: 'number', desc: 'Подоходный налог к уплате' },
    { num: '064', name: 'STI100X064', type: 'number', desc: 'Доход после уплаты отчислений по государственному социальному страхованию в негосударственный пенсионный фонд и подоходного налога (= 050 – 053 – 058)' },
  ];

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const sum = Number(formData.STI100X051) + Number(formData.STI100X052);
    setFormData({ ...formData, STI100X050: sum });
  }, [formData.STI100X051, formData.STI100X052]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className='flex flex-row flex-wrap p-6 pt-2 bg-slate-100 rounded-lg'>
        {tpInfo.map(({ num, name, type, desc }) => (
          <InputProp
            key={name}
            num={num}
            name={name}
            type={type}
            value={formData[name as keyof STI100_4Declaration]}
            size="w-3/12 pt-4 pr-4"
            desc={desc}
            labelType={LabelTypeEnum.Top}
            onChange={handleChange}
          />
        ))}
      </div>

      {formFields.map(({ num, name, type, desc }) => (
        <InputProp
          key={name}
          num={num}
          name={name}
          type={type}
          value={formData[name as keyof STI100_4Declaration]}
          size="w-full"
          desc={desc}
          labelType={LabelTypeEnum.Right}
          onChange={handleChange}
        />
      ))}

      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default STI100_4DeclarationPart2;