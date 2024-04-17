import { useSession } from "next-auth/react"
import Layout from "../components/layout"

export default function MePage() {
  const { data } = useSession()

  return (
    <Layout>
      <div className="container mt-24 px-8 lg:px-28">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  )
}
