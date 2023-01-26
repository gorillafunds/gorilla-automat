import * as Icons from "./index"

export default {
  title: "Components/Icons",
}

const allIcons = Object.values(Icons)

export const Base = () => (
  <div className="flex items-center gap-4">
    {allIcons.map((Icon) => (
      <div className="bg-gray-200 rounded-md overflow-hidden">
        <div className="p-4 flex items-center justify-center">
          <Icon className="w-16 h-16" key={Icon.name} />
        </div>
        <span className="bg-gray-300 block text-center p-2">{Icon.name}</span>
      </div>
    ))}
  </div>
)
