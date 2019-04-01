export function createNewMockUser() {
  // hacky implementation to get a unique id, in a real app i'd use a UUID
  const randomId = new Date().toLocaleTimeString();

  return {
    id: randomId.toString(),
    name: "Sander Brugge",
    age: "24",
    sex: "Male",
    location: "Gent",
    rating: 5,
    thumbnail: "https://media.licdn.com/dms/image/C4D03AQHA-a42qCDHHw/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=eBUawF3b9iYX46UvQkEHWfIlFZQFfq_IDr7d4lnhdnQ"
  }
}
