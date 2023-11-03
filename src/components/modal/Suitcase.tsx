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

                    : <Table responsive style={{'textAlign': 'center'}}>
                        <thead>
                        <tr>
                            <th>Иконка</th>
                            <th>Символ</th>
                            <th>Цена в USD</th>
                            <th>Рыночная капитализация в USD</th>
                            <th>Возможность добавить в портфель</th>
                            <th>Возможность добавить в портфел</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            coins.map(coin => <TableForSuitCase data={coin}/>)

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