namespace ReactCore.Common.AppSettings
{
    public interface IAppConfigurations
    {
        ConnectionStringsConfig ConnectionStrings { get; }
        JWTConfig Jwt { get; }
    }
}
