
import Dessert from "../Dessert"
import dessertItemView from "../views/dessertItemView";

export default function dessertsList(desserts:Dessert[]) {
    return desserts.map((dessert:Dessert) => dessertItemView(dessert));

}