export function UserSkeleton() {
  return (
    <div className="user-card">
      <div className="skeleton" style={{ width:96, height:96, borderRadius:'50%', flexShrink:0 }} />
      <div className="user-info" style={{ flex:1 }}>
        <div className="skeleton" style={{ width:'40%', height:24, marginBottom:8 }} />
        <div className="skeleton" style={{ width:'25%', height:16, marginBottom:16 }} />
        <div className="skeleton" style={{ width:'80%', height:14, marginBottom:8 }} />
        <div className="skeleton" style={{ width:'60%', height:14, marginBottom:24 }} />
        <div style={{ display:'flex', gap:32 }}>
          {[1,2,3].map(i => (
            <div key={i}>
              <div className="skeleton" style={{ width:40, height:20, marginBottom:4 }} />
              <div className="skeleton" style={{ width:70, height:13 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReposSkeleton() {
  return (
    <div className="repos-grid" style={{ marginTop:24 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="repo-card" style={{ pointerEvents:'none' }}>
          <div className="skeleton" style={{ width:'60%', height:18, marginBottom:10 }} />
          <div className="skeleton" style={{ width:'90%', height:13, marginBottom:6 }} />
          <div className="skeleton" style={{ width:'70%', height:13, marginBottom:16 }} />
          <div style={{ display:'flex', gap:12 }}>
            <div className="skeleton" style={{ width:60, height:13 }} />
            <div className="skeleton" style={{ width:40, height:13 }} />
          </div>
        </div>
      ))}
    </div>
  );
}
