let initialState = {
  friendsData: [
    { id: 1, name: "Anna", avatar: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128771571/original/c540edc5830213c6de3243d97061c3f12cdc2d3b/design-a-digital-icon-of-your-roblox-character.png"},
    { id: 2, name: "Ivan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCwcYJIQnwXyQcyN8DdYfM0UDCUd_gprKEQ&usqp=CAU"},
    { id: 3, name: "Igor", avatar: "https://pm1.narvii.com/6544/9e5275d11654e09a0786ea750c4c9f64ccee5a58_hq.jpg"}
  ]
};

export const navbarReducer = (state = initialState, action) => {
  return state;
}

export default navbarReducer;
