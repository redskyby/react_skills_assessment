import React from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Suitcase = ({show, setShow}: { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const coins = useSelector((state: RootState) => state.isSuitCaseToolkit.coins);

    return (
        <Modal show={show} onHide={() => setShow(false)} size={"xl"}>
            <Modal.Header closeButton>
                Портфель монет
            </Modal.Header>
            <Modal.Body>
                <Table responsive style={{'textAlign': 'center'}}>
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

                    }
                    </tbody>
                </Table>
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