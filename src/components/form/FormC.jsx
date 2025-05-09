import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const FormC = ({idpage}) => {
  const navigate = useNavigate()
  const [errores, seterrores] = useState({})
  const [formRegister, setFormRegister] = useState({
    Usuario: "",
    Email: "",
    Contrasenia: "",
    repContrasenia: "",
    terminosCondiciones: false
  })

  const [formLogin, setFormLogin] = useState({
    Usuario:"",
    Contrasenia:""
  })

const handleChangeFormRegister = (ev) => {
  const value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value
  setFormRegister({...formRegister, [ev.target.name] : value})
}

const handleClickFormRegister = (ev) => {
  ev.preventDefault()
  const erroresReg = {}
  const {Usuario, Email, Contrasenia, repContrasenia, terminosCondiciones} = formRegister

  if (!Usuario){
    erroresReg.Usuario = "Error campo Usuario esta vacio"
  } if(!Email){
    erroresReg.Email = "Error campo Email esta vacio"
  } if(!Contrasenia){
    erroresReg.Contrasenia = "Error campo Contraseña esta vacio"
  } if(!repContrasenia){
    erroresReg.repContrasenia = "Error campo Repetir Contraseña esta vacio"
  } if (!terminosCondiciones){
    erroresReg.terminosCondiciones = "Error Terminos y Condiciones no fue aceptado"
  } else{
    errores.campo = "Error Campo Incorrecto"
  }

  seterrores(erroresReg)
  
  if(Usuario && Email && Contrasenia && repContrasenia && terminosCondiciones){
    if(Contrasenia === repContrasenia){
      const usuarioLs = JSON.parse(localStorage.getItem("usuarios")) || []

      const nuevoUsuario = {
        id: usuarioLs[usuarioLs.length - 1]?.id + 1 || 1,
        Usuario,
        Email,
        Contrasenia,
        terminosCondiciones,
        rol: "usuario",
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
    Usuario: "",
    Email: "",
    Contrasenia: "",
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

  const {Usuario, Contrasenia} = formLogin

  if(!Usuario){
    erroresLog.Usuario = "El campo Usuario esta vacio"
  }

  if(!Contrasenia){
    erroresLog.Contrasenia = "El campo Contraseña esta vacio"
  }

  if(Usuario && Contrasenia){
    const usuarioLs = JSON.parse(localStorage.getItem("usuarios"))
    const usuarioExiste = usuarioLs.find((user) => user.Usuario === Usuario)

    if(!usuarioExiste){
      Swal.fire({
        icon: "error",
        title: "El usuario y/o contraseña no son correctos",
      });
    } else{
      if(usuarioExiste.Contrasenia === Contrasenia) {
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
        <Form.Control type="text" className={errores.Usuario ? "form-control is-invalid" : "form-control" } value={idpage === "register" ? formRegister.Usuario : formLogin.Usuario} name='Usuario' onChange={idpage === "register" ? handleChangeFormRegister : handleChangeFormLogin} />
        {
          errores.Usuario && 
          <p className='text-danger'>{errores.Usuario}</p>
        }
      </Form.Group>

      {
        idpage === "register" &&
        <Form.Group className="mb-3" controlId="idEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" className={errores.Email ? "form-control is-invalid" : "form-control" } value={formRegister.Email} name='Email' onChange={handleChangeFormRegister} />
        {
          errores.Email && 
          <p className='text-danger'>{errores.Email}</p>
        }
      </Form.Group>
      }

      <Form.Group className="mb-3" controlId="idContrasenia">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" className={errores.Contrasenia ? "form-control is-invalid" : "form-control"} value={idpage === "register" ? formRegister.Contrasenia : formLogin.Contrasenia} name='Contrasenia' onChange={idpage === "register" ? handleChangeFormRegister : handleChangeFormLogin} />
        {
          errores.Contrasenia && 
          <p className='text-danger'>{errores.Contrasenia}</p>
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