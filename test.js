const query = `
    SELECT DISTINCT a.title
    FROM Animation a
    JOIN AnimationTag at ON a.animationId = at.animationId
    JOIN Tag t ON at.tagId = t.tagId
    WHERE t.name IN (?)`;
