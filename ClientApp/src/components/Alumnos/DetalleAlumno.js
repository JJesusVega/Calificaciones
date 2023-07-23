import { useEffect, useState } from "react"
import { ButtonGroup,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloAlumno= {
    idContacto: 0,
    cveAlumno:"",
    nombre: "",
    apPaterno: "",
    apMaterno: "",
    sexo: "",
    grado: "",
    grupo: "",
    fechaInscripcion:""
}

const DetalleAlumno = ({ mostrarModal, setMostrarModal, guardarAlumno, editar, setEditar, editarAlumno }) => {

    const [alumno, setAlumno] = useState(modeloAlumno);
    const [rSelected, setRSelected] = useState(null);


    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setAlumno(
            {
                ...alumno,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (alumno.idAlumno == 0) {
            guardarAlumno(alumno)
        } else {
            editarAlumno(alumno)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setAlumno(editar)
        } else {
            setAlumno(modeloAlumno)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {alumno.idAlumno == 0 ? "Nuevo Alumno" : "Editar Alumno"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={alumno.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ap. Paterno</Label>
                        <Input name="appaterno" onChange={(e) => actualizaDato(e)} value={alumno.apPaterno} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ap. Materno</Label>
                        <Input name="apmaterno" onChange={(e) => actualizaDato(e)} value={alumno.apMaterno} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Sexo</Label>
                       <Input name="sexo" onChange={(e) => actualizaDato(e)} value={alumno.sexo} />
                        <ButtonGroup>
                            <Button
                                color="primary"
                                outline
                                onChange={(e) => actualizaDato(e)}
                                onClick={() => setRSelected("H")}
                                active={rSelected === "H"}
                            > Hombre
                            </Button>
                            <Button
                                color="primary"
                                outline
                                onChange={(e) => actualizaDato(e)}
                                onClick={() => setRSelected("M")}
                                active={rSelected === "M"}
                            >Mujer
                            </Button>                            
                        </ButtonGroup>

                    </FormGroup>
                    <FormGroup>
                        <Label>Grado</Label>
                        <Input name="grado" onChange={(e) => actualizaDato(e)} value={alumno.grado} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Grupo</Label>
                        <Input name="grupo" onChange={(e) => actualizaDato(e)} value={alumno.grupo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Fecha Inscripción</Label>
                        <Input name="fechaInscripcion" onChange={(e) => actualizaDato(e)} value={alumno.fechaInscripcion} />
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

export default DetalleAlumno;