import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloUsuario= {
    idUsuario: 0,
    usuario1: "",
    password: "",
    rol: ""
}

const DetalleUsuario = ({ mostrarModal, setMostrarModal, guardarUsuario, editar, setEditar, editarUsuario }) => {

    const [usuario, setUsuario] = useState(modeloUsuario);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setUsuario(
            {
                ...usuario,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (usuario.idUsuario == 0) {
            guardarUsuario(usuario)
        } else {
            editarUsuario(usuario)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setUsuario(editar)
        } else {
            setUsuario(modeloUsuario)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {usuario.idUsuario == 0 ? "Nuevo Usuario" : "Editar USuario"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Usuario</Label>
                        <Input name="usuario1" onChange={(e) => actualizaDato(e)} value={usuario.usuario1} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input name="password" onChange={(e) => actualizaDato(e)} value={usuario.password} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Rol</Label>
                        <Input name="rol" onChange={(e) => actualizaDato(e)} value={usuario.rol} />
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

export default DetalleUsuario;