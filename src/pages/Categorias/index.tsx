import { useState } from "react";
import { Button, Container, Table } from "./styles";
import Modal from 'react-modal';

export function Categorias() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Table>
                <Button>
                    <button type="button" onClick={openModal}>
                        Nova Categoria
                    </button>
                </Button>
                <table>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Client Script</td>
                        </tr>

                        <tr>
                            <td>Business Rules</td>
                        </tr>
                    </tbody>
                </table>
            </Table>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >

                <Container>
                    <h2>Criar nova categoria</h2>

                    <input placeholder="Nome"></input>
                    
                    <button type="submit">
                        Salvar
                    </button>
                </Container>

            </Modal>

        </>
    )
}