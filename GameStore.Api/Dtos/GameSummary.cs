namespace GameStore.Api.Dtos;

public record GameSummary(
    int Id,
    string Name,
    string Genre,
    decimal Price,
    DateOnly ReleaseDate
);
