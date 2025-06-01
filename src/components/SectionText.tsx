import Word from './Word';

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const SectionText = () => {
  return (
    <main className='bg-primary'>
        <div style={{height: "100vh"}}></div>
        <Word value={paragraph} />
        <div style={{height: "100vh"}}></div>
    </main>
  )
}

export default SectionText