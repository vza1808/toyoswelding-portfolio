export default function ContactPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <p>
        You can reach me at{' '}
        <a href="mailto:toyovazquez31@gmail.com" className="underline text-blue-600">
          toyovazquez31@gmail.com
        </a>
        , by phone at{' '}
        <a href="tel:8016879647" className="underline text-blue-600">
          (801) 687-9647
        </a>
        , or on{' '}
        <a
          href="https://www.linkedin.com/in/metodio-vazquez-4b7769286/"
          className="underline text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  )
}