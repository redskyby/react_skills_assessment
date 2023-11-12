import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';
import TableForSuitCase from './TableForSuitCase';
import secondNumberAfterDot from '../../../utils/SecondNumberAfterDot';
import style from './Suitcase.module.scss';

const Suitcase = ({ show, setShow }: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const coins = useSelector((state: RootState) => state.isSuitCaseToolkit.coins);
    const [totalCount, setTotalCount] = useState<string>('0');

    useEffect(() => {
        if (coins.length !== 0) {
            const total = coins.reduce((a, b) => a + parseFloat(b.priceUsd), 0);
            const totalWith2Number: string = secondNumberAfterDot(total.toString());
            setTotalCount(totalWith2Number);
            localStorage.setItem('total', totalWith2Number);
        } else {
            setTotalCount('0');
            localStorage.setItem('total', '0');
        }
    }, [coins]);

    const showOffModalForm = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShow(false);
    };

    return (
        // <Modal show={show} onHide={() => setShow(false)} size={'xl'}>
        //     <Modal.Header closeButton>Портфель монет</Modal.Header>
        //     <Modal.Body>
        //         {coins.length === 0 ? (
        //             <h2 className={'text-center'}>Портфель пуст!</h2>
        //         ) : (
        //             <Table responsive>
        //                 <thead>
        //                     <tr>
        //                         <th className={'align-middle text-center'}>Иконка</th>
        //                         <th className={'align-middle text-center'}>Название монеты</th>
        //                         <th className={'align-middle text-center'}>Символ</th>
        //                         <th className={'align-middle text-center'}>rank</th>
        //                         <th className={'align-middle text-center'}>supply</th>
        //                         <th className={'align-middle text-center'}>Цена в USD</th>
        //                         <th className={'align-middle text-center'}>Рыночная капитализация в USD</th>
        //                         <th className={'align-middle text-center'}>maxSupply</th>
        //                         <th className={'align-middle text-center'}>Возможность удалить из портфеля</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {coins.map((coin) => (
        //                         <TableForSuitCase key={coin.id} data={coin} />
        //                     ))}
        //                 </tbody>
        //             </Table>
        //         )}
        //     </Modal.Body>
        //     <Modal.Footer className={'d-flex flex-row  justify-content-between'}>
        //         <p>Общая сумма : {totalCount}$</p>
        //         <Button variant="secondary" onClick={() => setShow(false)}>
        //             Close
        //         </Button>
        //     </Modal.Footer>
        // </Modal>
        <div style={{ display: show ? 'block' : 'none' }}>
            <div className={style.second_block} onClick={(e) => showOffModalForm(e)} />
            <div className={show ? style.module_show : style.module_hide}>
                <div className={style.module_show_button_top}>
                    <button type={'button'} onClick={(e) => showOffModalForm(e)}>
                        X
                    </button>
                </div>
                <div>
                    {coins.length === 0 ? (
                        <h2 className={style.module_show_main_title}>Портфель пуст!</h2>
                    ) : (
                        <table className={style.module_show_table}>
                            <thead>
                                <tr>
                                    <th className={style.module_show_table_title}>Иконка</th>
                                    <th className={style.module_show_table_title}>Название монеты</th>
                                    <th className={style.module_show_table_title}>Символ</th>
                                    <th className={style.module_show_table_title}>rank</th>
                                    <th className={style.module_show_table_title}>supply</th>
                                    <th className={style.module_show_table_title}>Цена в USD</th>
                                    <th className={style.module_show_table_title}>Рыночная капитализация в USD</th>
                                    <th className={style.module_show_table_title}>maxSupply</th>
                                    <th className={style.module_show_table_title}>Возможность удалить из портфеля</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coins.map((coin) => (
                                    <TableForSuitCase key={coin.id} data={coin} />
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className={style.module_show_down_text}>
                    <p>Общая сумма : {totalCount}$</p>
                </div>
            </div>
        </div>
    );
};

export default Suitcase;
