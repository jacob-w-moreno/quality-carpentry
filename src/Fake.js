import React, { useState } from 'react';

const Falsifier = props => {

// ===== ===== DATA BEG ===== =====
  
  const [data, fakeData] = useState(false);
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  const fakeFunction = (string) => {
    let aString = string.splice('');
    aString.join('hi');
  }
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  

  
// ===== ===== 'COMPONENTS' END ===== =====

return <div className='className'>
  
  
  
</div>
}

export default Falsifier;