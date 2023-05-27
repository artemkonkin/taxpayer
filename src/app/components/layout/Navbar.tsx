import React from 'react';
import Link from 'next/link';

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
    return (
        <div className='flex w-2/12 flex-col space-y-8 p-4 bg-white'>
            <div className='flex h-8'>
                <img src="https://cabinet.salyk.kg/images/salym.svg" alt="" />
            </div>
            <nav className='flex flex-col space-y-8'>
                <ul className='flex flex-col space-y-2'>
                    <p className='text-xs uppercase text-slate-400'>Деларации</p>
                    <li className='space-y-2'>
                        <Link href="/modules/declaration/" className='flex'>
                            <span>🔥</span>
                            ЕНД
                        </Link>
                        <Link href="/modules/declaration/" className='flex'>
                            <span>🔥</span>
                            Отчеты
                        </Link>
                        <Link href="/modules/user/" className='flex'>
                            <span>🔥</span>
                            Авторизация
                        </Link>
                    </li>
                </ul>
                <ul className='flex flex-col space-y-2'>
                    <p className='text-xs uppercase text-slate-400'>ЭТТН</p>
                    <li className='space-y-2'>
                        <Link href="/modules/declaration/" className='flex'>
                            <span>🔥</span>
                            Перемещения
                        </Link>
                        <Link href="/modules/declaration/" className='flex'>
                            <span>🔥</span>
                            Склады
                        </Link>
                        <Link href="/modules/declaration/" className='flex'>
                            <span>🔥</span>
                            Справочники
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;