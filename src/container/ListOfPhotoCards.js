// Un 'container' se encarga de hacer el fetching de datos de nuestros componentes

import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

// HoC => High order component
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
