import { Layout } from "./index"

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
}

export const Base = () => (
  <Layout>
    <div className="flex h-96 w-[800px] items-center justify-center bg-gray-300">
      Content
    </div>
  </Layout>
)
