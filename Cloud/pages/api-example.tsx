import Layout from "../components/layout"

export default function ApiExamplePage() {
  return (
    <Layout>
      <div className="container mt-24 px-8 lg:px-28">
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src="/api/examples/session" />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src="/api/examples/jwt" />
      </div>
    </Layout>
  )
}
