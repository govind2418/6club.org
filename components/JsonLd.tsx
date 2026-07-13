export function JsonLd({ schemas }: { schemas: (object | null)[] }) {
  const valid = schemas.filter(Boolean);
  if (!valid.length) return null;
  return (
    <>
      {valid.map((schema, i) => (
        // eslint-disable-next-line react/no-danger
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}
