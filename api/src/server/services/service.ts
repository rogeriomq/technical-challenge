export default interface Service<P, R> {
  run(props: P): R;
}
