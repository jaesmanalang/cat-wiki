import CatList from '@components/CatList';

export default function Cats() {
  return (
    <>
      <div className="mb-20">
        <h1 className="font-bold text-3xl mb-5">List of cat breeds</h1>
        <CatList />
      </div>
    </>
  );
}
