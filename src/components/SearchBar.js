import React from 'react';
import { inject, observer } from 'mobx-react';

const SearchBar = inject('mainStore')(observer((props) => {
  return (
    <div>
      <div>
        <h4>Email your politician</h4>
        <p>Enter your postcode to find your local politicians</p>
      </div>
      <div>
        <input type="number" name="postcode" maxlength="4" required="" />
        <button ><i class="fa fa-search"></i></button>
      </div>
    </div >
  );
}));

export default SearchBar;