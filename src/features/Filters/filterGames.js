export const filterGames = (
  games,
  { search, platform, genre, year, parentPlatform },
) => {
  return games
    .filter((game) => game.name.toLowerCase().includes(search.toLowerCase())) // Apply search filter
    .filter((game) =>
      !platform || game.platforms.some((p) => p.platform.name === platform)
    ) // Apply platform filter
    .filter((game) =>
      !parentPlatform.length ||
      game.parent_platforms.some((p) =>
        parentPlatform.includes(p.platform.slug)
      )
    )
    .filter((game) => !genre || game.genres.some((g) => g.name === genre)) // Apply genre filter
    .filter((game) =>
      !year || new Date(game.released).getFullYear().toString() === year
    ); // Apply year filter
};
