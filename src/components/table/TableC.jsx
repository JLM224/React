import { Table } from "react-bootstrap"

const TableC = (idpage, array) => {
  return (
    <>
    <Table striped bordered hover>
      <thead>
          {
            idpage === "usuarios"
            ?
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Roll</th>
              <th>Acciones</th>
            </tr>
            :
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Detalle</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          }
      </thead>
      <tbody>
        {
          array.map((element) => 
        idpage === "usuarios"
          ?
          <tr>
          <td>{i + 1}</td>
          <td>{element.nombreUsuario}</td>
          <td>{element.rol}</td>
          <td className="w-50">
            <Button variant='warning'>Editar</Button>
            <Button variant='danger' className='mx-3'>Eliminar</Button>
            <Button variant='info'>Deshabilitar</Button>
          </td>
        </tr>
        :
        <tr>
          <td>{i + 1}</td>
          <td className="w-25">{element.title}</td>
          <td>${element.price}</td>
          <td className="w-25">{element.description}</td>
          <td>
            <img src={element.image} alt="" width={50} />
          </td>
          <td className="w-50">
            <Button variant='warning'>Editar</Button>
            <Button variant='danger' className='mx-3'>Eliminar</Button>
            <Button variant='info'>Deshabilitar</Button>
          </td>
        </tr>
        )
        }
      </tbody>
    </Table>
    </>
  )
}

export default TableC