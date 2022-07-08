const styles = {
    box: { width: '100%', height:'40px', borderRadius:'5px' },
    tabMenuItem : { flex:1, minHeight:'40px', fontFamily: 'Nunito', fontWeight: 'bold' },
    inputBox : { 
       height: '40px', fontFamily: 'Nunito',  fontWeight: 700, fontSize: '18px', lineHeight: '25px', color: '#41504D'
    },
    margin: (direction, value) => {
      return {
        [`margin${direction}`] : value
      }
    },
    btn : {
        primary : {
            width: '155px',
            height: '40px',
            color: '#FFFFFF',
            background: '#308271',
            fontFamily: 'Nunito',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '29px'
        }
    }
  }

export default styles;
