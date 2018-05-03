namespace ReactCore.Common.AppSettings
{
    public class AppSettingsConfig : IAppConfigurations
    {
        public ConnectionStringsConfig ConnectionStrings { get; set; }
        public JWTConfig Jwt { get; set; }
    }

    public class ConnectionStringsConfig
    {
        public string DefaultConnection { get; set; }
    }

    public class JWTConfig
    {
        public string Secret { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
    }
}
