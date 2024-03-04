import {MdDelete} from 'react-icons/md'
import './index.css'

const MusicCard = props => {
  const {eachItem, deleteHandler} = props
  const {imageUrl, name, genre, duration} = eachItem

  const deleteTheItem = () => {
    deleteHandler(eachItem.id)
  }

  return (
    <li className="listCard">
      <div className="imageCard">
        <div>
          <img src={imageUrl} alt="track" />
        </div>
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>

      <div className="timeCard">
        <p>{duration}</p>
        <button
          type="button"
          onClick={deleteTheItem}
          className="buttonCard"
          label="deletingItem"
          data-testid="delete"
        >
          <MdDelete />
        </button>
      </div>
    </li>
  )
}

export default MusicCard
