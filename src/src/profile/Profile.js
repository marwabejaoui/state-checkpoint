import PropTypes from "prop-types";

function Profile({
    fullName = 'Marwa Bejaoui',
    handleName,
    image,
    profession = 'technicien supérieur/ Web developer',
    bio
          })
{

    return (
        <div>

            <h1 style = {{fontWeight:'700', fontStyle:'italic',
             fontSize:'1.7rem', color:'rgb(46, 204, 113 )'}}> { fullName } </h1>
            <img src = {image} alt = 'mon image' style = {{height: '50vmin'}} />
            <h2 style = {{fontWeight: '400',fontSize: '1.2rem',
                color: 'rgb(46, 204, 113 )'
            }}> {profession} </h2>
           
            <button onClick={() => handleName(fullName)} style={{
                backgroundColor: 'rgb(110, 44, 0 )',
                color: '#FFFFFF ', fontSize: '1.2rem', marginTop: '2rem', 
            }}>fullName</button>
            
        </div>
    );
}
Profile.defaultProps = {
    fullName:" MARWA BEJAOUI"
};
Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
    image: PropTypes.string,
    bio: PropTypes.string
  };

export default Profile;

