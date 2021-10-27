const Scroll = ({ children }) =>
  <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px' }}>
    {children}
  </div>

export default Scroll;