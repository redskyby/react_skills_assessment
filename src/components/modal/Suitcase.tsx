import React from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import TableForSuitCase from "./TableForSuitCase";

const Suitcase = ({show, setShow}: { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const coins = useSelector((state: RootState) => state.isSuitCaseToolkit.coins);

    return (
        <Modal show={show} onHide={() => setShow(false)} size={"xl"}>
            <Modal.Header closeButton>
                Портфель монет
            </Modal.Header>
            <Modal.Body>
                {coins.length === 0 ? <h2 className={'text-center'}>Портфель пуст!</h2>

                    : <Table responsive>
                        <thead>
                        <tr>
                            <th className={'align-middle text-center'}>Иконка</th>
                            <th className={'align-middle text-center'}>Название монеты</th>
                            <th className={'align-middle text-center'}>Символ</th>
                            <th className={'align-middle text-center'}>rank</th>
                            <th className={'align-middle text-center'}>supply</th>
                            <th className={'align-middle text-center'}>Цена в USD</th>
                            <th className={'align-middle text-center'}>Рыночная капитализация в USD</th>
                            <th className={'align-middle text-center'}>maxSupply</th>
                            <th className={'align-middle text-center'}>Возможность удалить из портфеля</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            coins.map(coin => <TableForSuitCase key={coin.id} data={coin}/>)

                        }
                        </tbody>
                    </Table>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Suitcase;