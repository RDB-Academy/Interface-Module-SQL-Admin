import React from 'react';

const SchemaDefView = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>SchemaDef View</h1>
      <h2>{params.id}</h2>
    </div>
  );
};

SchemaDefView.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default SchemaDefView;
