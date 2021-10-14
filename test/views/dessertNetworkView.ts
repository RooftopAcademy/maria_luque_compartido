
import SocialNetwork from "../SocialNetwork"

export default function dessertNetworkView(network:SocialNetwork) {
    return `
   <img src="${network.image}" alt="${network.name}" />
    `
}