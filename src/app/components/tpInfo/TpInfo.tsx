import React, { ChangeEvent } from 'react';
import Input from '../InputProps';

interface TpInfoProps {
}

const TpInfo: React.FC<TpInfoProps> = ({  }) => {
  
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='flex flex-col space-y-4 p-4 bg-slate-100 rounded-md'>
        <div className='flex flex-row space-x-4'>
          <Input interfacePropName ="" type='text' name='ИНН' number='102' value={'21508199500885'} onChange={handleInputChange} />
          <Input interfacePropName ="" type='text' name='Наименование плательщика' number='103' value={'Конкин Артем Анатольевич'} onChange={handleInputChange} />
          <Input interfacePropName ="" type='text' name='Код УГНС' number='104' value={'019 - г.Каракол'} onChange={handleInputChange} />
          <Input interfacePropName ="" type='text' name='Наименование района' number='' value={'г.Каракол'} onChange={handleInputChange} />
        </div>
        <div className='flex flex-row space-x-4'>
          <Input interfacePropName ="" type='text' name='Серия и № Паспорта' number='106' value={'А№2690904'} onChange={handleInputChange} />
          <Input interfacePropName ="PASSPORTCOUNTRY" type='text' name='Страна выдачи' number='107' value={'1'} onChange={handleInputChange} />
          <Input interfacePropName ="" type='text' name='Телефон(Дом.Раб.)' number='115' value={'0'} onChange={handleInputChange} />
          <Input interfacePropName ="EMAIL" type='text' name='Адрес электронной почты' number='116' value={'0.33'} onChange={handleInputChange} />
        </div>
        <div className='flex flex-row space-x-4'>
          <Input interfacePropName ="" type='text' name='Почтовый индекс' number='108' value={'722200'} onChange={handleInputChange} className='w-3/12'/>
          <Input interfacePropName ="" type='text' name='Область, Город/Область. район, Село' number='110' value={'Ыссык-Кульская обл., г.Каракол'} onChange={handleInputChange} className='w-3/12'/>
          <Input interfacePropName ="REGISTRATIONADDRESSSTREET" type='text' name='Улица/микрорайон, и Номер Дома/Квартиры' number='111' value={'кыштобаева, 91, 72'} onChange={handleInputChange} className='w-3/12'/>
          <div className='w-3/12'></div>
        </div>
      </div>
  );
};

export default TpInfo;