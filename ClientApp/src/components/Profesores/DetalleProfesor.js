import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloProfesor = {
    idProfesor: 0,
    nombre: "",
    apPaterno: "",
    apMaterno: ""
}

const DetalleProfesor = ({ mostrarModal, setMostrarModal, guardarProfesor, editar, setEditar, editarProfesor }) => {

    const [profesor, setProfesor] = useState(modeloProfesor);


    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setProfesor(
            {
                ...profesor,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (profesor.idProfesor== 0) {
            guardarProfesor(profesor)
        } else {
            editarProfesor(profesor)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setProfesor(editar)
        } else {
            setProfesor(modeloProfesor)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {profesor.idProfesor == 0 ? "Nuevo Profesor" : "Editar Profesor"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={profesor.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ap. Paterno</Label>
                        <Input name="appaterno" onChange={(e) => actualizaDato(e)} value={profesor.apPaterno} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ap. Materno</Label>
                        <Input name="apmaterno" onChange={(e) => actualizaDato(e)} value={profesor.apMaterno} />
                    </FormGroup>                  
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    )

}

export default DetalleProfesor;