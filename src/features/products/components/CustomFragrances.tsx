import { NavBar } from '../../../components/NavBar'

export default function CustomFragrance() {


  return (
    <>
      <NavBar />
      <form
      
        className="product__form"
      >
        <p className="product__title">Crea tu producto personalizado</p>
        <p className="product__message">
          ¿Como quieres que sea?
        </p>
        <div className="product__flex">
          <label>
            <input
              className="product__input"
              type="text"
              placeholder=""
              required
            />
            <span>Nombre</span>
          </label>

          <label>
            <input
              className="product__input"
              type="text"
              placeholder=""
              required
            />
            <span>Apellido</span>
          </label>
        </div>
        <label>
          <input
            className="product__input"
            type="text"
            accept="image/*"
            placeholder=""
            required
          />
          <span>Dirección</span>
        </label>

        <label>
          <input
            className="product__input"
            type="text"
            placeholder=""
            required
          />
          <span>Teléfono</span>
        </label>
        <label>
          <select
            className="product__input"
            required
          >
            <option value="3">FRAGANCIAS AMBIENTALES</option>
            <option value="1">VELAS AROMATICAS</option>
          </select>
          <span>Categoría</span>
        </label>

        <label>
          <textarea
            className="product__input"
            cols={30}
            rows={5}
            placeholder=""
            required
          />
          <span>Describe el aroma y tu producto deseado</span>
        </label>
        <button type="submit" className="product__submit">
          Enviar
        </button>
        <button className="product__submit" type="reset">
          Limpiar
        </button>
      </form>
    </>
  )
}
