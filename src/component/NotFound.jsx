const NotFound = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <h2>404 - ページが見つかりません</h2>
      <p>指定されたページは存在しません。</p>
    </div>
  );
};

export default NotFound;
