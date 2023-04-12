import InvitationProtected from '../../../components/invitationProtected/invitationProtected'

const Invitation = ({params}) => {
  const {name} = params
  return (
    <div>
      <InvitationProtected name={name}/>
    </div>
  )
}
export default Invitation

export async function getServerSideProps(context) {
  const { name } = context.query;

  const response = await axios.get(`${port}/guests/${name}`);
  const guest = response.data;

  return {
    props: { guest },
  };
}