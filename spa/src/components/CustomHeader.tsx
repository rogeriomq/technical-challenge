export function CustomHeader() {
  return (
    <header className="flex flex-col bg-primary p-3 justify-center">
      <div className="flex flex-col pb-1 relative w-full">
        <div className="">
          <img
            alt="Neoway logo"
            src="logo.svg"
            loading="lazy"
            className="object-fill h-12" />
        </div>
        <h1 className="text-3xl text-secondary w-full text-center">Challenge Neoway SPA</h1>
      </div>
      <p className="text-white text-center">Basic Management of the CPF and CNPJ</p>
    </header>
  )
}
