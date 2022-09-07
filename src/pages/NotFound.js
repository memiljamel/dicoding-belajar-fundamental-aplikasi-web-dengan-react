import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'src/components/Button';

function NotFound() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickBackHandler = () => {
    navigate('/', { replace: true });
  }

  return (
    <div className="inline-block w-full h-auto">
      <div className="w-full h-auto p-0 my-4 mx-auto text-center">
        <div className="h-[156px] p-0 m-0 bg-not-found bg-contain bg-no-repeat bg-center"></div>
        <span className="block mb-3 font-Roboto font-normal text-black/[0.60] text-sm text-ellipsis whitespace-nowrap overflow-hidden">Halaman <b>{pathname}</b> tidak ditemukan</span>
        <Button onClick={onClickBackHandler} type="button" text="Kembali ke Beranda" />
      </div>
    </div>
  );
}

export default NotFound;