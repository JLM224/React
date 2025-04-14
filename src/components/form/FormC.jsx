import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const FormC = ({idpage}) => {
  const navigate = useNavigate()
  const [errores, seterrores] = useState({})
  const [formRegister, setFormRegister] = useState({
    nombreUsuario: "",
    emailUsuario: "",
    contrasenia: "",
    repContrasenia: "",
    terminosCondiciones: false
  })

  const [formLogin, setFormLogin] = useState({
    nombreUsuario:"",
    contrasenia:""
  })

const handleChangeFormRegister = (ev) => {
  const value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value
  setFormRegister({...formRegister, [ev.target.name] : value})
}

const handleClickFormRegister = (ev) => {
  ev.preventDefault()
  const erroresReg = {}
  const {nombreUsuario, emailUsuario, contrasenia, repContrasenia, terminosCondiciones} = formRegister

  if (!nombreUsuario){
    erroresReg.nombreUsuario = "Error campo Usuario esta vacio"
  } if(!emailUsuario){
    erroresReg.emailUsuario = "Error campo Email esta vacio"
  } if(!contrasenia){
    erroresReg.contrasenia = "Error campo Contraseña esta vacio"
  } if(!repContrasenia){
    erroresReg.repContrasenia = "Error campo Repetir Contraseña esta vacio"
  } if (!terminosCondiciones){
    erroresReg.terminosCondiciones = "Error campo Terminos y Condiciones no fue aceptado"
  } else{
    errores.campo = "Error Campo Incorrecto"
  }

  seterrores(erroresReg)
  
  if(nombreUsuario && emailUsuario && contrasenia && repContrasenia && terminosCondiciones){
    if(contrasenia === repContrasenia){
      const usuarioLs = JSON.parse(localStorage.getItem("usuarios")) || []

      const nuevoUsuario = {
        id: usuarioLs[usuarioLs.length - 1]?.id + 1 || 1,
        nombreUsuario,
        emailUsuario,
        contrasenia,
        terminosCondiciones,
        rol: "admin",
        login: false
      }

      Swal.fire({
        title: "Registro Exitoso!",
        text: "En minutos recibiras un email de confirmacion",
        icon: "success"
      });

      usuarioLs.push(nuevoUsuario)
      localStorage.setItem("usuarios", JSON.stringify(usuarioLs))

      setFormRegister({
    nombreUsuario: "",
    emailUsuario: "",
    contrasenia: "",
    repContrasenia: "",
    terminosCondiciones: false
      })

      setTimeout(() => {
        navigate("/login")
      }, 1500);


    }else{
      Swal.fire({
        icon: "error",
        title: "Las contraseñas no coinciden",
      });
    }
  }
}

const handleChangeFormLogin = (ev) => {
  setFormLogin({...formLogin, [ev.target.name] : ev.target.value})
}

const handleClickFormLogin = (ev) => {
  ev.preventDefault()
  const erroresLog = {}

  const {nombreUsuario, contrasenia} = formLogin

  if(!nombreUsuario){
    erroresLog.nombreUsuario = "El campo Usuario esta vacio"
  }

  if(!contrasenia){
    erroresLog.contrasenia = "El campo Contraseña esta vacio"
  }

  if(nombreUsuario && contrasenia){
    const usuarioLs = JSON.parse(localStorage.getItem("usuarios"))
    const usuarioExiste = usuarioLs.find((user) => user.nombreUsuario === nombreUsuario)

    if(!usuarioExiste){
      Swal.fire({
        icon: "error",
        title: "El usuario y/o contraseña no son correctos",
      });
    } else{
      if(usuarioExiste.contrasenia === contrasenia) {
        usuarioExiste.login = true
        localStorage.setItem("usuarios", JSON.stringify(usuarioLs))
        sessionStorage.setItem("usuario", JSON.stringify(usuarioExiste))
        if(usuarioExiste.rol === "admin") {
          setTimeout(() => {
            navigate("/admin")
          }, 1500);
        }else{
          setTimeout(() => {
            navigate("/user")
          }, 1500);
        }
      }
    }
  }
}

  return (
    <Form>
      <Form.Group className="mb-3" controlId="idUsuario">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" className={errores.nombreUsuario ? "form-control is-invalid" : "form-control" } value={idpage === "register" ? formRegister.nombreUsuario : formLogin.nombreUsuario} name='nombreUsuario' onChange={idpage === "register" ? handleChangeFormRegister : handleChangeFormLogin} />
        {
          errores.nombreUsuario && 
          <p className='text-danger'>{errores.nombreUsuario}</p>
        }
      </Form.Group>

      {
        idpage === "register" &&
        <Form.Group className="mb-3" controlId="idEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" className={errores.emailUsuario ? "form-control is-invalid" : "form-control" } value={formRegister.emailUsuario} name='emailUsuario' onChange={handleChangeFormRegister} />
        {
          errores.emailUsuario && 
          <p className='text-danger'>{errores.emailUsuario}</p>
        }
      </Form.Group>
      }

      <Form.Group className="mb-3" controlId="idContrasenia">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" className={errores.contrasenia ? "form-control is-invalid" : "form-control"} value={idpage === "register" ? formRegister.contrasenia : formLogin.contrasenia} name='contrasenia' onChange={idpage === "register" ? handleChangeFormRegister : handleChangeFormLogin} />
        {
          errores.contrasenia && 
          <p className='text-danger'>{errores.contrasenia}</p>
        }
      </Form.Group>

      {
        idpage === "register" &&
        <Form.Group className="mb-3" controlId="idRepContrasenia2">
        <Form.Label>Repetir Contraseña</Form.Label>
        <Form.Control type="password" className={errores.repContrasenia ? "form-control is-invalid" : "form-control"} value={formRegister.repContrasenia} name='repContrasenia' onChange={handleChangeFormRegister} />
        {
          errores.repContrasenia && 
          <p className='text-danger'>{errores.repContrasenia}</p>
        }
      </Form.Group>
      }

      {
        idpage === "register" &&
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Aceptar Terminos y Condiciones" value={formRegister.checkUsuario} name='terminosCondiciones' onChange={handleChangeFormRegister} />
        {
          errores.terminosCondiciones && 
          <p className='text-danger'>{errores.terminosCondiciones}</p>
        }
      </Form.Group>
      }

      <div className='text-center'>
      <Button variant="primary" type="submit" onClick={idpage === "register" ? handleClickFormRegister : handleClickFormLogin}>
        {idpage === "register" ? "Enviar datos" : "Ingresar"}
      </Button>
      </div>
    </Form>
  )
}

export default FormC