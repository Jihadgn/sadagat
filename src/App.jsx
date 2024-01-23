const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com'
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com'
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com'
  },
]

export default function Example() {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
         <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" alt="" />
          <div className="ml-3">
            <p className="text-lg font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
